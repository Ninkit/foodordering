"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function handleFormSubmit(ev: { preventDefault: () => void; }) {
        ev.preventDefault();
        fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {'Content-Type': 'application/json'},
            });
    }
    return (
        <section className="mt-8">
            <h1 className=" mb-10 text-center text-primary text-4xl">
                Register
            </h1>
            <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}
            >
                <input type="email" placeholder="email" value={email} 
                       onChange={ev => setEmail(ev.target.value)}/>
                <input type="password" placeholder="password" value={password}
                       onChange={ev => setPassword(ev.target.value)} />
                <div className="my-3">
                <input type="password" placeholder="Confirm password" value={password}
                       onChange={ev => setPassword(ev.target.value)} />
                </div>
                <button type="submit">Register</button>
                <div className="my-4 text-gray-500 mx-auto text-center">
                    <Link href={''}>
                        or login with provider
                    </Link>
                </div>
                <button className="flex justify-center gap-2 items-center">
                    <Image src={"/googleimg2.png"} width={40} height={40} alt=""/>
                    Login with google
                </button>
            </form>
            <div>
                
            </div>
        </section>
    )
}