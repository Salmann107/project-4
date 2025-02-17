import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className='Home'>
<h2>Food with AI</h2>
<div class="container" id="container">
	<div class="form-container sign-up-container">
		<form action="#">
			<h1>Create Account</h1>
			<div class="social-container">
				<a href="https://www.facebook.com/" class="social" id="facebook"><i class="fab fa-facebook-f"></i></a>
				<a href="https://accounts.google.com/ServiceLogin" class="social"><i class="fab fa-google-plus-g"></i></a>
				<a href="https://www.linkedin.com/home" class="social"><i class="fab fa-linkedin-in"></i></a>
			</div>
			<span>use your email for registration</span>
			<input type="text" placeholder="Name" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<button type="button">Sign Up</button>
		</form>
	</div>
	<div class="form-container sign-in-container">
		<form action="#">
			<h1>Sign in</h1>
			<div class="social-container">
				<a href="https://www.facebook.com/" class="social" id="facebook"><i class="fab fa-facebook-f"></i></a>
				<a href="https://accounts.google.com/ServiceLogin" class="social" id='GooglePlus'><i class="fab fa-google-plus-g"></i></a>
				<a href="https://www.linkedin.com/home" class="social" id='Linkedin'><i class="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your account</span>
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<a href="#">Forgot your password?</a>
			<button type="button">Sign In</button>
		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button class="ghost" id="signIn">Sign In</button>
			</div>
			<div class="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Welcome to foode with AI</p>
				{/* <button class="ghost" id="signUp">Sign Up</button> */}
			</div>
		</div>
	</div>
</div>
    </div>
  )
}



export default Login