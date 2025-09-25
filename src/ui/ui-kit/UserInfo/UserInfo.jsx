import './UserInfo.css'

export function UserInfo({user}) {

    return(
        <div className="user-info">
            {user ? (
                <span>Привет, {user.name}!</span>
            ) : (
                <span>Загрузка...</span>
            )}
        </div>
    )
}