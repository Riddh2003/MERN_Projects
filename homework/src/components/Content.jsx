import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleUsers } from "../redux/contentSlice";
import { useForm } from "react-hook-form";

export const Content = () => {
    const dispatch = useDispatch();
    const { content, isLoading, error } = useSelector((state) => state.content);
    const themestate = useSelector((state) => state.theme.theme);
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();
    const [editingUser, setEditingUser] = useState(null);
    const [formError, setFormError] = useState(null);

    const userData = content && content.data ? content.data : [];

    const fetchUsers = () => {
        dispatch(handleUsers({ type: "GET" }));
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const submitHandler = (data) => {
        setFormError(null);

        const formattedData = {
            ...data,
            age: Number(data.age)
        };

        if (editingUser) {
            console.log("Updating user with data:", formattedData);

            dispatch(handleUsers({
                type: "PUT",
                data: { ...formattedData, _id: editingUser._id }
            }))
                .unwrap()
                .then((result) => {
                    console.log("Update successful:", result);
                    setEditingUser(null);
                    reset();
                    fetchUsers();
                })
                .catch(error => {
                    console.error("Failed to update user:", error);
                    setFormError(error || "Failed to update user. Please try again.");
                });
        } else {
            dispatch(handleUsers({
                type: "POST",
                data: formattedData
            }))
                .unwrap()
                .then(() => {
                    reset();
                    fetchUsers();
                })
                .catch(error => {
                    console.error("Failed to add user:", error);
                    setFormError(error || "Failed to add user. Please try again.");
                });
        }
    };

    const handleEdit = (user) => {
        console.log("Editing user:", user);
        setEditingUser(user);
        setValue("name", user.name);
        setValue("email", user.email);
        setValue("age", user.age);
    };

    const handleDelete = (id) => {
        dispatch(handleUsers({
            type: "DELETE",
            data: { _id: id }
        }))
            .unwrap()
            .then(() => {
                fetchUsers();
            })
            .catch(error => {
                console.error("Failed to delete user:", error);
            });
    };

    return (
        <div className="min-h-[calc(100vh-80px)] p-6 space-y-8">
            <div className={`w-full max-w-lg mx-auto p-8 rounded-xl shadow-xl transition-all duration-300 ${themestate === 'white'
                ? 'bg-white text-gray-900'
                : 'bg-gray-900 text-white'
                }`}>
                <h1 className="text-3xl font-bold mb-6 text-center text-purple-700">
                    {editingUser ? "Edit User" : "Add User"}
                </h1>

                {formError && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
                        <p>{formError}</p>
                    </div>
                )}

                <form className="space-y-6" onSubmit={handleSubmit(submitHandler)}>
                    <div>
                        <label className={`block text-sm font-medium mb-2 ${themestate === 'white' ? 'text-gray-700' : 'text-gray-300'
                            }`}>
                            Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className={`w-full px-4 py-2 rounded-lg border ${themestate === 'white'
                                ? 'border-gray-300 focus:border-purple-500 bg-white text-gray-900'
                                : 'border-gray-700 focus:border-purple-500 bg-gray-800 text-white'
                                } focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-all duration-300`}
                            {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>

                    <div>
                        <label className={`block text-sm font-medium mb-2 ${themestate === 'white' ? 'text-gray-700' : 'text-gray-300'
                            }`}>
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className={`w-full px-4 py-2 rounded-lg border ${themestate === 'white'
                                ? 'border-gray-300 focus:border-purple-500 bg-white text-gray-900'
                                : 'border-gray-700 focus:border-purple-500 bg-gray-800 text-white'
                                } focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-all duration-300`}
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address"
                                }
                            })}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    <div>
                        <label className={`block text-sm font-medium mb-2 ${themestate === 'white' ? 'text-gray-700' : 'text-gray-300'
                            }`}>
                            Age
                        </label>
                        <input
                            type="number"
                            placeholder="Enter your age"
                            className={`w-full px-4 py-2 rounded-lg border ${themestate === 'white'
                                ? 'border-gray-300 focus:border-purple-500 bg-white text-gray-900'
                                : 'border-gray-700 focus:border-purple-500 bg-gray-800 text-white'
                                } focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-all duration-300`}
                            {...register("age", {
                                required: "Age is required",
                                min: { value: 1, message: "Age must be at least 1" },
                                max: { value: 120, message: "Age must be less than 120" }
                            })}
                        />
                        {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>}
                    </div>

                    <div className="flex justify-center space-x-4">
                        <button
                            type="submit"
                            className="px-6 py-2 text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                            {editingUser ? "Update" : "Add"}
                        </button>
                        {editingUser && (
                            <button
                                type="button"
                                className="px-6 py-2 text-white bg-gray-600 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-all duration-300 shadow-md hover:shadow-lg"
                                onClick={() => {
                                    setEditingUser(null);
                                    reset();
                                }}
                            >
                                Cancel
                            </button>
                        )}
                    </div>
                </form>
            </div>

            {/* User List Table */}
            <div className="w-full max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-center text-purple-700">User List</h2>

                {isLoading && (
                    <div className="text-center py-8">
                        <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-purple-700 border-t-transparent"></div>
                    </div>
                )}

                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
                        <p className="text-center">{error}</p>
                    </div>
                )}

                {userData && userData.length > 0 ? (
                    <div className={`overflow-hidden rounded-xl shadow-lg ${themestate === 'white'
                        ? 'bg-white'
                        : 'bg-gray-900'
                        }`}>
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className={`${themestate === 'white'
                                    ? 'bg-gray-50 text-gray-700'
                                    : 'bg-gray-800 text-gray-200'
                                    }`}>
                                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">ID</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Email</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Age</th>
                                    <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className={`divide-y ${themestate === 'white'
                                ? 'divide-gray-200 text-gray-900'
                                : 'divide-gray-700 text-gray-300'
                                }`}>
                                {userData.map((user) => (
                                    <tr key={user._id} className="hover:bg-opacity-50 transition-colors duration-200">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">{user._id}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">{user.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">{user.email}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">{user.age}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-right space-x-2">
                                            <button
                                                onClick={() => handleEdit(user)}
                                                className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(user._id)}
                                                className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-300"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className={`text-center py-8 ${themestate === 'white' ? 'text-gray-500' : 'text-gray-400'
                        }`}>
                        <p className="text-lg">No Users Found</p>
                    </div>
                )}
            </div>
        </div>
    );
};
