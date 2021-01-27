# Register page
The app uses authentication in the form of an email and password. To register, click the 'Register' or 'Sign up' buttons. Enter the email that is used for the patient records and a password in the two remaining fields. When clicking 'Sign Up' the app will log the user in and redirect to the dashboard. The app won't register a user if their email is not found in the patients or users (admins) in the Cliniko API. 

![register](./docs/img/App_register.png)


# Login page
When the user is logged out and tries to access the website they are redirected to the login page. Sign in with the credentials that the user has registered with.

![register](./docs/img/App_login.png)

If incorrect details are provided 'Invalid email or password' will show.

![register](./docs/img/App_invalid_login.png)

# Forgot password page
If the user has forgotten their login details they can click 'Forgot password' to redirect to the forgot password page. Once the user enters their email and clicks 'Submit Query' the server will send a password reset email.

![register](./docs/img/App_forgot.png)
# Reset password page
The testing email service Etheral Email (https://ethereal.email/) is used and will receive the messages sent from the server. Copy the link to be redirected to the reset page.

![register](./docs/img/App_email.png)

The password reset creates a token that is attached to the users profile and will expire in 2 minutes. The user must enter their email and new password before that time to change it.

![register](./docs/img/App_reset.png)

If the time expires the 'Token Invalid' message shows.

![register](./docs/img/App_token_invalid.png)

# Dashboard

Once the user is logged in they are redirected to the Dashboard where they can click links to other pages

![register](./docs/img/App_dash.png)
# Appointments

On the Appointments page, the user can see there appointment information and be able to make a change request. If such a request is made a ticket is created containing the information.

![register](./docs/img/App_Appoint.png)
# Client Info

A user can see their information that is stored on the Cliniko site by accessing this tab. Clicking 'Edit' will redirect to a Edit details page where they can change the details.

![register](./docs/img/App_client.png)
![register](./docs/img/App_client_edit.png)
# Notifications

The Notifications tab will contain all of the tickets the user has created. If the user is an Admin it will contain all tickets where they can accept, reject or delete tickets

![register](./docs/img/App_noti.png)


# Using the app

To start the app in the development environment enter into the terminal: 

    yarn start