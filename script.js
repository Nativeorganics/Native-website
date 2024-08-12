

// Show the side navbar
function showNavbar() {
    const sidenav = document.querySelector(".side-navbar");
    sidenav.style.left = "0";
}

// Close the side navbar
function closeNavbar() {
    const sidenav = document.querySelector(".side-navbar");
    sidenav.style.left = "-60%";
}
function togglePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = (popup.style.display === 'block') ? 'none' : 'block';
}

function hidePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

function showTab(tabId) {
    document.getElementById('loginTab').style.display = (tabId === 'login') ? 'block' : 'none';
    document.getElementById('createTab').style.display = (tabId === 'create') ? 'block' : 'none';
    document.getElementById('forgotPasswordTab').style.display = (tabId === 'login' && document.getElementById('forgotPasswordTab').style.display === 'block') ? 'block' : 'none';
}

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    console.log('Login with', email, password);
    alert('Login Successful');

    const username = email.split('@')[0];
    document.getElementById('usernameDisplay').textContent = `Hi! ${username}`;
    document.getElementById('usernameDisplay').style.display = 'block'; 
    togglePopup();
}

function handleCreateAccount(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('createEmail').value;
    const password = document.getElementById('createPassword').value;

    console.log('Create account with', username, email, password);
    alert('Account created successfully');

    document.getElementById('usernameDisplay').textContent = `Hi! ${username}`;
    document.getElementById('usernameDisplay').style.display = 'block'; 
    hidePopup();
}
function handleForgotPassword(event) {
    event.preventDefault();
    const email = document.getElementById('forgotEmail').value;
    console.log('Reset password for', email);
    alert('Password reset instructions sent to your email');
    showTab('login');  
    document.getElementById('forgotPasswordTab').style.display = 'none'; 

}

function showForgotPassword() {
    document.getElementById('forgotPasswordTab').style.display = 'block';
}


function showSuggestions(value) {
    
}

function expandSearchBar() {
    const searchDiv = document.getElementById('search');
    const searchInput = document.getElementById('input');
    searchDiv.classList.add('expanded');
    searchInput.classList.add('expanded');
}

function shrinkSearchBar() {
    const searchDiv = document.getElementById('search');
    const searchInput = document.getElementById('input');
    searchDiv.classList.remove('expanded');
    searchInput.classList.remove('expanded');
}




document.getElementById('subscribeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    
    if (email === '') {
        alert('Please enter your email.');
    } else {
        emailInput.value = 'Thanks for subscribing!';
        emailInput.disabled = true;
    }
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    
    const responseDiv = document.getElementById('response');
    responseDiv.textContent = `Thank you, ${name}. We have received your message and will get back to you at ${email} or ${phone}.`;
    
    
    document.getElementById('contact-form').reset();
});

// profile
function toggleMenu() {
    const menu = document.getElementById('popupMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

function showLogin() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('popupMenu').style.display = 'none';
}

function showSignup() {
    document.getElementById('signupForm').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('popupMenu').style.display = 'none';
}


window.onclick = function(event) {
    if (!event.target.matches('.profile-icon img') && !event.target.matches('.popup-menu button')) {
        document.getElementById('popupMenu').style.display = 'none';
    }
}

function expandSearchBar() {
    document.querySelector('.search').classList.add('expanded');
}

function shrinkSearchBar() {
    document.querySelector('.search').classList.remove('expanded');
}






