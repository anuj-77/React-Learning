import React from 'react';
import formConfig from '../config/FormConfig';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

const SignupForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange' });

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {formConfig.signup.map(field => (
                <div key={field.name}>
                    <label>{field.label}</label>
                    {field.type === 'radio' ? (
                        field.options.map(option => (
                            <label key={option}>
                                <input
                                    type="radio"
                                    value={option}
                                    {...register(field.name, {
                                        required: field.required ? `${field.label} is required` :false
                                    })}
                                />
                                {option}
                            </label>
                        ))
                    ) : field.type === 'select' ? (
                        <select
                            {...register(field.name, {
                                required: field.required ? `${field.label} is required` : false
                            })}
                        >
                            <option value="">Select {field.label}</option>
                            {field.options.map(option => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
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
                        />
                    )}
                    <ErrorMessage
                        errors={errors}
                        name={field.name}
                        render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                    />
                </div>
            ))}
            <button type="submit">Sign Up</button>
        </form>

    );
};

export default SignupForm;




