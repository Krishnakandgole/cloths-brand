import React, { useState } from "react";

const Profile = () => {
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "V K",
        email: "",
        phone: "+919019887394",
        gender: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div className="bg-purple-900 flex items-center justify-center h-[100px] text-white">
                <h2 className="text-2xl font-bold ">Profile Information</h2>
            </div>
            <div className=" mx-auto h-full p-6 bg-gray-800 text-white shadow-md rounded-lg">


                <div className="flex justify-end items-center mb-2">

                    <button
                        className="text-white font-semibold"
                        onClick={() => setEditMode(!editMode)}
                    >
                        {editMode ? "Save" : "Edit"}
                    </button>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        disabled={!editMode}
                        className="p-2 border rounded w-full focus:outline-blue-400 bg-transparent"
                    />
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        disabled={!editMode}
                        className="p-2 border rounded w-full focus:outline-blue-400 bg-transparent"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-white">Gender</label>
                    <div className="flex space-x-4 mt-1">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="gender"
                                value="Male"
                                checked={formData.gender === "Male"}
                                onChange={handleChange}
                                disabled={!editMode}
                                className="mr-2"
                            />
                            Male
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="gender"
                                value="Female"
                                checked={formData.gender === "Female"}
                                onChange={handleChange}
                                disabled={!editMode}
                                className="mr-2 bg-transparent"
                            />
                            Female
                        </label>
                    </div>
                </div>

                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-medium">Email Address</h3>
                    <button
                        className="text-white font-semibold"
                        onClick={() => setEditMode(!editMode)}
                    >
                        {editMode ? "Save" : "Edit"}
                    </button>
                </div>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={!editMode}
                    className="p-2 border rounded w-full mb-4 focus:outline-blue-400 bg-transparent"
                    placeholder="Ente your e-mail address"
                />

                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-medium">Mobile Number</h3>
                    <button
                        className="text-white font-semibold"
                        onClick={() => setEditMode(!editMode)}
                    >
                        {editMode ? "Save" : "Edit"}
                    </button>
                </div>
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={!editMode}
                    className="p-2 border rounded w-full focus:outline-blue-400 bg-transparent"
                />
            </div>
        </>
    );
};

export default Profile;
