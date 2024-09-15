import {useAppDispatch, useAppSelector} from "../../app/providers/store/store.ts";
import {selectAllUsers, usersThunks} from "../../slices/users/model/users-slice.ts";
import {useEffect} from "react";



export const useFetchUsers=()=>{
    const allUsers = useAppSelector(selectAllUsers)
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (!allUsers.length) {
            dispatch(usersThunks.fetchUsers())
        }
    }, [allUsers, dispatch])

    return {
        allUsers
    }
}