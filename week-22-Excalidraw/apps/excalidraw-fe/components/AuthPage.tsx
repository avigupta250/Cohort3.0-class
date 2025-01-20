

export function AuthPage({ isSignin }: {
    isSignin: boolean
}) {

    return <div className="w-screen h-screen flex justify-center items-center">
        <div className="p-2 m-2 bg-white rounded flex flex-col  gap-3">
            <div className="flex text- flex-col"> 
                <label className="text-black text-md ">Email</label>
                <input className="bg-gray-300 p-1 rounded-md" type="text" placeholder="email" />
            </div>
            <div className="flex text- flex-col"> 
                <label className="text-black text-md ">Passowrd</label>
                <input className="bg-gray-300 p-1 rounded-md" type="password" placeholder="password" />
            </div>
           
            <button
                className="bg-blue-600 p-1 rounded-md "
                onClick={() => {

                }}
            >{isSignin ? "Sign In " : "Sign Up"}</button>
        </div>
    </div>

}