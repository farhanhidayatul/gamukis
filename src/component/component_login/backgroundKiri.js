import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import ButtonLoginGoogle from './component_login_asset/buttonLoginGoogle';
import '../component_login/backgroundKiri.css';
import InputPassword from './component_login_asset/inputPassword';
import InputEmailUsername from './component_login_asset/inputEmailUsername';
import ButtonLogin from './component_login_asset/buttonLogin';

const BackgroundKiri = () => {
    const [emailOrUsername, setEmailOrUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate(); // Inisialisasi navigasi

    return (
        <div className="login-right">
            <form>
                <h2 className="font-welcome">
                    Selamat datang di <span className="font-gamukis">GAMUKIS</span>
                </h2>
                <InputEmailUsername setInputEmailUsername={setEmailOrUsername} />
                <InputPassword setInputPassword={setPassword} />
                <div className='flex-row-container'>
                    <div className="remember-me">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <a className="font-lupapassword" 
                        onClick={() => navigate('/forgot-password')} 
                        style={{ cursor: 'pointer' }}>
                        Lupa password?
                    </a>
                </div>
                <ButtonLogin inputEmailUsername={emailOrUsername} inputPassword={password} />
                <ButtonLoginGoogle />
            </form>
            <p className='font-nohaveaccount'>
                Belum punya akun? 
                <a onClick={() => navigate('/register')} style={{ cursor: 'pointer' }}> Daftar</a> sekarang!!
            </p>
        </div>
    );
};

export default BackgroundKiri;

