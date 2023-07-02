export interface propsHeader{
    title: string;
}
export interface propsVideoScreen{
    isShowModal:boolean,
    videoPath:string,
    setShow:React.Dispatch<React.SetStateAction<boolean>>,
}