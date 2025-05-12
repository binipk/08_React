import '../Layout.css';

function LoginModal({ onClose }) {
    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <h2>Login</h2>
                    <form className="modal-form">
                    <input type="text" placeholder='Enter your ID' />
                    <input type="password" placeholder='Enter your Passwords' />
                    <div className='button-group'>
                        <button type="submit">Confirm</button>
                        <button type="button" onClick={onClose}>Close</button>
                    </div>
                    </form>
            </div>
        </div>
    );
}

export default LoginModal;
