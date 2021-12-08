import {UserPost} from "../../components/userPost/index";


export function UserPostContainer({firstName, secondName, date, content}) {
    const fullName = `${firstName} ${secondName}`;
    return <UserPost fullName={fullName} date={date} content={content}/>
}