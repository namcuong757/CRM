package com.example.mcqprojectbackend.webSocket;

import org.springframework.stereotype.Component;
import java.util.concurrent.ConcurrentHashMap;
import javax.websocket.EndpointConfig;
import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;

// #################### WebSocket ####################
// Because Google Sheets writing run asynchronously.
// When writing to Google Sheet failed, the failed operation needs to be pushed to the client.
// When the server tries to push a message, the client may be online or offline.
// Thus, server need try to push message several times.
// At the same time, in order to ensure that the client has indeed received the message.
// The client needs to send a confirmation reply.

@ServerEndpoint(value = "/websocket/{userId}", configurator = WebSocketConfig.class) // Accept websocket request path
@Component
public class WebSocketServer
{
    // The set of websockets for all online clients.
    public static ConcurrentHashMap<String, WebSocketServer> webSocketSet = new ConcurrentHashMap<>();

    // The set of error messages which need to push to client.
    // Because only one user is allowed to write to GoogleSheet at one time.
    // Thus, the timestamp must be unique when a write error or exception occurs.
    // Map<SessionId, Map<TimeStamp, ErrorMessage>>
    public static  ConcurrentHashMap<String, ConcurrentHashMap<String, String>> messageSet = new ConcurrentHashMap<>();
    // WebSocket is not stable.
    // The pipeline will be closed at any time due to some problems,
    // such as refreshing the webpage and restarting the browser.
    // But the sessionId will not change.
    // this  WebSocket's SessionId.
    private String sid = "";
    // this webSocket's session.
    private Session session;

    // This method will be called by the JobSheetRepository when Google Sheets written failed.
    public static void pushErrorMessage(String timeStamp, String message, String sid)
    {
        System.out.println("[WebSocket] get Error message[" + message + "]");
        // If there is no error message set for this client, create a new one.
        if(messageSet.containsKey(sid))
        {
            // put error message to the set.
            messageSet.get(sid).put(timeStamp, message);
        }
        else
        {
            // create a new set.
            ConcurrentHashMap<String, String> newMessageSet = new ConcurrentHashMap<>();
            // put error message to the set.
            newMessageSet.put(timeStamp, message);
            // put set to Map.
            messageSet.put(sid, newMessageSet);
        }

        // If the client is still online, push the error message to the client.
        if(webSocketSet.get(sid) != null)
        {
            webSocketSet.get(sid).sendMessage(timeStamp, message);
        }
        else
        {
            System.out.println("[WebSocket] client: " + sid + " [offline]");
        }
    }

    // push the error message to this WebSocket's client.
    private void sendMessage(String timeStamp, String message)
    {
        session.getAsyncRemote().sendText(message);
        /*
        // Try to push messages to the client 5 times.
        // When the client receives the message.
        // Client will automatically send a confirmation message to the server.
        // And then, the server will remove this message from the error message set.
        int i = 0;
        // The number of pushes is less than 5, and no confirmation reply has been received.
        while ((i < 5) && ( messageSet.get(sid).containsKey(timeStamp)))
        {
            i++;
            System.out.println("[WebSocket] send("+i+") message[" + message + "] to client[" + sid + "]");
            session.getAsyncRemote().sendText(message);
            try
            {
                // After waiting for 2 seconds, and try again.
                Thread.sleep(2000);
            }
            catch (InterruptedException e)
            {
                System.out.println("[WebSocket] send("+i+") Thread sleep Interrupted.");
            }
        }
        // Clear message set after 5 push attempts
        if(i == 5)
        {
            System.out.println("[WebSocket][Error][Thread Done]client[" + sid + "] may be not receive [" + message + "]");
            messageSet.get(sid).remove(timeStamp);
        }*/
    }

    @OnOpen
    public void onOpen(Session session, EndpointConfig config, @PathParam(value = "userId") String userId)
    {
        sid = userId;
        this.session = session;
        this.session.setMaxIdleTimeout(0);
        /*
        if(!messageSet.containsKey(sid))
        {
            messageSet.put(sid, new ConcurrentHashMap<>());
        }*/
        System.out.println("[WebSocket] client [" + sid + "] onOpen.");
        webSocketSet.put(sid, this);
        this.onMessage("hello", this.session);
    }

    @OnClose
    public void onClose()
    {
        System.out.println("[WebSocket] client [" + sid + "] onClose.");
    }

    // Received a message from the client
    @OnMessage
    public void onMessage(String timeStamp, Session session)
    {
        System.out.println("send Message");
        this.sendMessage("timeStamp","Hello Client");
        /*
        // Received confirmation reply.
        if (messageSet.containsKey(sid))
        {
            // the confirmation message is received and the message set is cleared
            if (messageSet.get(sid).containsKey(timeStamp))
            {
                messageSet.get(sid).remove(timeStamp);
                System.out.println("[WebSocket]client[" + sid + "] receive [" + timeStamp + "]");
            }
            // The message set has been cleared before receiving the confirmation message.
            else
            {
                System.out.println("[WebSocket]client[" + sid + "] has received [" + timeStamp + "] or Thread done.");
            }
        }
        // Confirmation received for the second time.
        else
        {
            System.out.println("[WebSocket][receive]client:[" + sid + "] is offline, but the message[" + timeStamp + "] has arrived.");
        }*/
    }

    @OnError
    public void onError(Session session, Throwable error)
    {
        error.printStackTrace();
    }
}

