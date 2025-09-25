import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import './Header.css'
import {Logo, UserInfo} from "../../ui-kit";
import {selectUser, setUser} from "../../../store";

export function Header() {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)

    useEffect(() => {
        setTimeout(() => {
            dispatch(setUser({
                id: 1,
                name: 'Иван Иванов',
                email: 'ivan@example.com'
            }))
        }, 500)
    }, [dispatch])

  return (
    <header className="header">
      <Logo/>
      <UserInfo user={user}/>
    </header>
  )
}