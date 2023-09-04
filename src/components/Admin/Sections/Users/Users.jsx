import React, {useEffect, useState} from 'react';
import s from "./Users.module.css"
import usersReq from "@/axios/admin/users/usersReq";
import {AiFillDelete, AiFillEdit} from "react-icons/ai";
import EditPopup from "@/components/Admin/Sections/Users/EditPopup";
import DeletePopup from "@/components/Admin/Sections/Users/DeletePopup";
import {useDispatch} from "react-redux";


function Users(props) {
    const dispatch = useDispatch()
    function deleteUser(user){
        usersReq.deleteUser(user._id).then((data) => {

                setUsers(users.filter((u) => {
                    return u._id !== user._id
                }))
            }).catch((err) => {
                console.log(err)
            })
    }
    const [users, setUsers] = useState(null)
    const [currentEditUser, setCurrentEditUser] = useState(null)
    const [popupStatus, setPopupStatus] = useState(false)
    const [deletePopupStatus, setDeletePopupStatus] = useState({
        status:false,
        user:null
    })
    const [updatePage, setUpdatePage] = useState(0)
    useEffect(() => {
        usersReq.getUsers().then((res) => {
            setUsers(res.data)
        })
    },[updatePage])
    return (
        <>
            {deletePopupStatus.status && <DeletePopup delete={deleteUser} deletePopupStatus={deletePopupStatus} setDeletePopupStatus={setDeletePopupStatus}/>}
            {currentEditUser && <EditPopup updatePage={updatePage} setUpdatePage={setUpdatePage} user={currentEditUser} popupStatus={popupStatus} setPopupStatus={setPopupStatus} setCurrentEditUser={setCurrentEditUser}/>}

            <div>Users</div>
            <div>
                <table className={s.usersTable}>
                    <thead>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Address</th>
                    <th>Control</th>
                    </thead>
                    {users?.map((user) => {
                        return (
                            <tr key={user._id}>
                                <td>{user.fullName}</td>
                                <td>{user.email}</td>
                                <td>{user.mobile}</td>
                                <td>{user.address || "null"}</td>
                                <td className={s.userController}>
                                    <span onClick={() => {
                                        setCurrentEditUser(user)
                                        setPopupStatus(true)
                                    }}><AiFillEdit /></span>
                                    <span onClick={() => {
                                        setDeletePopupStatus({
                                            status:true,
                                            user:user
                                        })

                                }}><AiFillDelete /></span> </td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </>

    );
}

export default Users;