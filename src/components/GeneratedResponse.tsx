import ReactMarkdown from "react-markdown"

// typing it ANY for now (will change it soon...)
export default function GeneratedResponse(props: any) {
    return (
        <>
            {props.loading && <p>Loading...</p>}
            {props.error && <p className="text-red-500">{props.error}</p>}

            {   
                props.response &&
                <div className="prose bg-white p-6 rounded-xl w-full flex items-center flex-col">
                    <ReactMarkdown>{props.response}</ReactMarkdown>
                </div>
            }
            
            {/* does a window load lol, shows when theres stuff in response state */}
            {
                props.response &&
                <button 
                    className="hover:bg-slate-600 bg-slate-500 my-5 sm:w-md hover:cursor-pointer text-white py-2 px-4 rounded mt-4" 
                    onClick={()=>{location.reload()}}>
                        Reset Application
                </button>
            }
        </>
    )
}