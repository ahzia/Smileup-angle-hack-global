import { MdClose } from "react-icons/md";
import { useEffect } from "react";

export default function AIChat({ aiChatOpen, setAiChatOpen }) {

    const sendMessageToAgent = (message) => {
        const sessionId = sessionStorage.getItem('df-messenger-sessionID');
        fetch(
            `https://dialogflow.cloud.google.com/v1/cx/integrations/messenger/webhook/projects/hey-buddy-425118/agents/565449f1-c5bd-40c2-8457-295ce6ae892d/sessions/${sessionId}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    queryInput: {
                        text: {
                            text: message,
                        },
                        languageCode: 'en',
                    },
                    queryParams: {
                        channel: 'DF_MESSENGER',
                    },
                }),
            },
        )
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };
    useEffect(() => {
        console.log("aicha", aiChatOpen)
        if (aiChatOpen) {
            sendMessageToAgent(`{agent="smileUp", userName: "Ahmad", community: "LYF Funan"`);
        }
    }, [aiChatOpen]);

    return (
        aiChatOpen && (<div className="w-full h-[800px] relative z-20">
            <button
                className="absolute top-4 right-4 z-20 bg-secondary p-2 rounded-full hover:bg-error transition-all duration-200"
                onClick={() => setAiChatOpen(false)}
                aria-label="Close Modal"
            >
                <MdClose size={28} className="text-textPrimary" />
            </button>
            <df-messenger
                project-id="hey-buddy-425118"
                agent-id="565449f1-c5bd-40c2-8457-295ce6ae892d"
                language-code="en"
                max-query-length="-1"
                allow-feedback="all"
            >
                <df-messenger-chat chat-title="SmileUp AI">
                </df-messenger-chat>
            </df-messenger>

        </div>)
    )
}