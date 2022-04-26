import { useForm } from "react-hook-form";
import React, {useState} from "react";
import { Link } from "react-router-dom";

const Create = () => {
    
    const [webform, updateWebform] = React.useState([]);
    const [fields, updateFields] = React.useState([]);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        webform.push(data)
        updateWebform(webform)
        console.log(webform)
    }
    
    for(let i = 0; i < webform.length; i++) {
        fields[i] = '<input type="' + webform[i].fieldType + '" placeholder="' + webform[i].fieldName + '" {...register("' + webform[i].fieldName + '", {})} />'
        console.log("fields: " + fields)
    }

    return(
        <div className="create">
            <h1 style={{fontSize: 50, fontWeight: "lighter"}}>Webform Creator</h1>
            <h3 style={{fontWeight:"lighter", color: '#777'}}>Add or remove custom fields to complete your new webform.</h3>
    
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Field Name" style={{ padding: '20px 3px', width:300, margin:"5px auto"}} defaultValue={""} {...register("fieldName", {})} />
                <br/><select {...register("fieldType")} style={{ padding: '20px 3px', width:300, margin:"5px auto"}}>
                    <option name="Text Field" value="text">Text Field</option>
                    <option name="Drop-Down Selection" value="text"> Drop-Down Selection</option>
                    <option name="Radio Selection" value="text"> Radio Selection</option>
                    <option name="Phone Number" value="text"> Phone Number</option>
                    <option name="Password" value="password"> Password</option>
                    <option name="Email" value="text"> Email</option>
                </select>
                <br /><input type="submit" value="Add Field" style={{ padding: '20px 5px', width:300, margin:"20px auto"}} />
            </form>
        
            <div style={{fontWeight:"lighter", color: '#777'}}>Preview:</div><br/>
            <form>
                {fields.map(field => (
                    <div>{field}</div>
                ))}
                {webform.map(form => (
                    <>
                    <br/>
                    <input type={form.fieldType} placeholder={form.fieldName} style={{ padding: '10px 2px', width:200, margin:"5px auto"}} defaultValue={""}></input>
                    </>
                ))}
            </form>
            <Link to="/submit">
                <button style={{ padding: '20px 5px', width:300, margin:"20px auto"}}>Finalize Webform</button>
            </Link>
            
            <br /><Link to="/" style={{textDecoration: 'none', color: '#888', padding:"50px 50px"}}>
                Go Back
            </Link>
                
        </div>
        
    );
}

export default Create