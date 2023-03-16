import React from 'react'
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from '../Firebase'

export default function Home() {
    const [user, loading, error] = useAuthState(auth)

    // const navigate = useNavigate();

    return (
        <div>
            {loading ? (
                <div>loading...</div>
            ) : (
                <div>
                    {user ? (
                        <div>show user info</div>
                    ) : (
                        <div>gege</div>
                    )}
                </div>
            )}
        </div>
    )
}
