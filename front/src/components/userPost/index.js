import './userPost.css'


export function UserPost({fullName, content, date}) {
    return (
        <div className="post">
            <div className="author">{fullName}</div>
            <div className="content">{content}</div>
            <div className="date">{date}</div>
        </div>
    )
}