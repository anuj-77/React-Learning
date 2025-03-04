import React, { useState } from 'react';
import './App.css';

const RegistrationForm = () => {

    const formValues ={
        firstName: "",
        lastName: "",
        phone: '',
        email: '',
        gender: 'Male',
        state: '',
        address: '',
        password: '',
        confirmPassword: '',
        CheckBox: false,
    }

    const [formData, setFormData] = useState({...formValues});


    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        // console.log("e is this",e);
        const { name, value, type, checked } = e.target;
        // console.log([name],checked);
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const validateForm = () => 
        {
            
        const newErrors = {};
        if (!formData.firstName || formData.firstName.length < 2 || formData.firstName.length > 30) {
            newErrors.firstName = 'First name must be between 2 and 30 characters.';
        }
        if (!formData.lastName || formData.lastName.length < 2 || formData.lastName.length > 30) {
            newErrors.lastName = 'Last name must be between 2 and 30 characters.';
        }
        if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = 'Phone number must be 10 digits.';
        }
        if(!Number.isNaN(formData.phone))
            {
                console.log("I was here");
                newErrors.phone = "Phone Number must be a number";
            }
   
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address.';
        }
        if (!formData.gender) {
            newErrors.gender = 'Please select your gender.';
        }
        if (!formData.state) {
            newErrors.state = 'Please select your state.';
        }
        if (formData.password.length < 6 || formData.password.length > 20) {
            newErrors.password = 'Password must be between 6 and 20 characters.';
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match.';
        }
        if (!formData.CheckBox) {
            newErrors.CheckBox = 'You must accept the CheckBox and conditions.';
        }
        console.log(newErrors);
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            alert('Form submitted successfully');
        }
        else{
            alert("Form Not Submitted");
        }
    };

    return (
        <div className="form-container">
            <h1>Registration Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="first-name">First Name:</label>
                <input
                    type="text"
                    id="first-name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder='First Name'

                />
                {errors.firstName && <div className="error-message">{errors.firstName}</div>}

                <label htmlFor="last-name">Last Name:</label>
                <input
                    type="text"
                    id="last-name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder='Second Name'
                     
                />
                {errors.lastName && <div className="error-message">{errors.lastName}</div>}

                <label htmlFor="phone">Phone No:</label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder='Ten Digit Phone Number'
                />
                {errors.phone && <div className="error-message">{errors.phone}</div>}

                <label htmlFor="email">Email ID:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                     
                />
                {errors.email && <div className="error-message">{errors.email}</div>}

                <div id = 'gender'>
                <label>Gender:</label>
                <label htmlFor="male">Male
                <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="Male"
                    onChange={handleChange}
                    checked={formData.gender === 'Male'}
                     
                />

                        </label>
                    <label htmlFor="female">Female
                <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="Female"
                    onChange={handleChange}
                    checked={formData.gender === 'Female'}
                     
                    />

                </label>
                {errors.gender && <div className="error-message">{errors.gender}</div>}
                </div>

                <label htmlFor="state">State:</label>
                <select
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                     
                >
                    <option value="">Select State</option>

                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Puducherry">Puducherry</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="West Bengal">West Bengal</option>
                </select>

                {errors.state && <div className="error-message">{errors.state}</div>}

                <label htmlFor="address">Address:</label>
                <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder='Use exact address as per AADHAR'
                ></textarea>

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                     
                    placeholder='Password'
                />
                {errors.password && <div className="error-message">{errors.password}</div>}

                <label htmlFor="confirm-password">Confirm Password:</label>
                <input
                    type="password"
                    id="confirm-password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder='Confirm Password'
                     
                />
                {errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}

                <div>
                <input
                    type="checkbox"
                    id="CheckBox"
                    name="CheckBox"
                    checked={formData.CheckBox}
                    onChange={handleChange}
                     
                />
                <label htmlFor="CheckBox">I accept the CheckBox and conditions</label>
                {errors.CheckBox && <div className="error-message">{errors.CheckBox}</div>}
                </div>

                <button type="submit" disabled={!formData.CheckBox}>Submit</button>
            </form>
        </div>
    );
};

export default RegistrationForm;
