"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/authClient";
import React from "react";

export default function CardDemo() {
	// const {data, error} = await authClient.signIn.email
	const handleLogin = async (e: React.SubmitEvent) => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;

		const { data, error } = await authClient.signIn.email({
			email,
			password,
		});

		console.log(data ?? error);
	}

	return (
		<div className="flex justify-center items-center min-h-screen">
			<form onSubmit={handleLogin}>
				<Card className="w-full max-w-sm">
					<CardHeader>
						<CardTitle>Login to your account</CardTitle>
						<CardDescription>
							Enter your email below to login to your account
						</CardDescription>
						<CardAction>
							<Button variant="link">Sign Up</Button>
						</CardAction>
					</CardHeader>
					<CardContent>

						<div className="flex flex-col gap-6">
							<div className="grid gap-2">
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									type="email"
									name="email"
									placeholder="m@example.com"
									required
								/>
							</div>
							<div className="grid gap-2">
								<div className="flex items-center">
									<Label htmlFor="password">Password</Label>
									<a
										href="#"
										className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
									>
										Forgot your password?
									</a>
								</div>
								<Input id="password" type="password" name="password" required />
							</div>
						</div>

					</CardContent>
					<CardFooter className="flex-col gap-2">
						<Button type="submit" className="w-full">
							Login
						</Button>
						<Button variant="outline" className="w-full">
							Login with Google
						</Button>
					</CardFooter>
				</Card>
			</form>
		</div>
	);
}
