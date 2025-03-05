import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import formConfig from '../config/FormConfig';
import './SignUp.css';

const SignupForm = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        mode: 'onChange',
        defaultValues: JSON.parse(localStorage.getItem('formData')) || {}
    });

    useEffect(() => {

        const savedData = localStorage.getItem('formData');
        if (savedData) {
            reset(JSON.parse(savedData));

        }
    }, [reset]);

    const onSubmit = data => {

        console.log(data);
        localStorage.setItem('formData', JSON.stringify(data));
        alert("You have Successfully Signed Up")
    };



    return (
        <>

            <h1>Sign Up Page</h1>

            <form onSubmit={handleSubmit(onSubmit)} noValidate className="form-container">
                {formConfig.signup.map(field => (

                    <div key={field.name} className="input-group">

                        <label className="label">{field.label}</label>

                        {field.type === 'radio' ? (

                            <div className="radio-group">

                                {field.options.map(option => (

                                    <label key={option} className="radio-label">

                                        <input

                                            type="radio"
                                            value={option}
                                            {...register(field.name, {
                                                required: field.required ? `${field.label} is required` : false
                                            })}
                                        />

                                        {option}

                                    </label>
                                ))}
                            </div>

                        ) : field.type === 'select' ? (

                            <select

                                {...register(field.name, {
                                    required: field.required ? `${field.label} is required` : false
                                })}

                                className="select"
                            >
                                <option value="">Select {field.label}</option>

                                {field.options.map(option => (

                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}

                            </select>

                        ) : field.type === 'textarea' ? (
                            <textarea

                                {...register(field.name, {

                                    required: field.required ? `${field.label} is required` : false,
                                    minLength: field.minLength

                                        ? {
                                            value: field.minLength,
                                            message: `${field.label} must be at least ${field.minLength} characters`
                                        }
                                        : undefined,

                                    maxLength: field.maxLength

                                        ? {
                                            value: field.maxLength,
                                            message: `${field.label} must be no more than ${field.maxLength} characters`
                                        }
                                        : undefined,
                                    pattern: field.pattern
                                        ? {
                                            value: new RegExp(field.pattern),
                                            message: `${field.label} is not valid`
                                        }
                                        : undefined
                                })}

                                className="textarea"
                            />
                        ) : (
                            <input
                                type={field.type}
                                {...register(field.name, {
                                    required: field.required ? `${field.label} is required` : false,
                                    minLength: field.minLength
                                        ? {
                                            value: field.minLength,
                                            message: `${field.label} must be at least ${field.minLength} characters`
                                        }
                                        : undefined,

                                    maxLength: field.maxLength

                                        ? {
                                            value: field.maxLength,
                                            message: `${field.label} must be no more than ${field.maxLength} characters`
                                        }
                                        : undefined,

                                    pattern: field.pattern

                                        ? {
                                            value: new RegExp(field.pattern),
                                            message: `${field.label} is not valid`
                                        }

                                        : undefined
                                })}

                                className="input"
                            />
                        )}

                        <ErrorMessage
                            errors={errors}
                            name={field.name}
                            render={({ message }) => <p className="error-message">{message}</p>}
                        />

                    </div>
                ))}

                <button type="submit" className="button">Sign Up</button>

            </form>

        </>
    );
};

export default SignupForm;