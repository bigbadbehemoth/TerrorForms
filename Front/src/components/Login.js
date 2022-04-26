import { useForm } from "react-hook-form";
import React from "react";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    username: yup.string().min(6).max(20).required(),
    password: yup.string().min(6).max(20).required(),
});

const Login = () => {
    const { register, handleSubmit, watch, errors } = useForm({
        resolver: yupResolver(schema),
    });
    const submitForm = data => console.log(data);

    return(
        <div className="login">
            <h1 style={{fontSize: 45, fontWeight:"lighter"}}>
                Our users' privacy is important to us.
            </h1>
            <h3 style={{fontSize: 20, fontWeight:"lighter"}}>
                Become an RTT Administrator today and gain access to all of the data collected by the forms hosted on our platform.
            </h3>

            <form onSubmit={handleSubmit(submitForm)}>
                <input type="text" name="username" placeholder="Username" defaultValue="test" style={{ padding: '20px 5px', width:300, margin:"20px auto"}} {...register("username", {})} />
                <br /><input type="password" name="password" placeholder="Password" defaultValue="test2" style={{ padding: '20px 5px', width:300, margin:"20px auto"}} {...register("password", {})} />
                <Link to="/success">
                    <br /><input type="submit" value="Sign Up" style={{ padding: '20px 5px', width:300, margin:"20px auto"}} />
                </Link>
            </form>

        </div>
        
    );
}

export default Login