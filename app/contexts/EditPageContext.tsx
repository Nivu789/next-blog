"use client"

import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";


interface EditPageContextType {
    editBlogId: number | null;
    setEditBlogId: Dispatch<SetStateAction<number | null>>;
}


export const EditPageContext = createContext<EditPageContextType | null>(null)

export const useEditBlogId = () => {
    const context = useContext(EditPageContext);
    if (!context) {
        throw new Error("useEditBlogId must be used within an EditPageContextProvider");
    }
    return context;
};


export default function EditPageContextProvider({children}:{children:React.ReactNode})
{
    
    const [editBlogId,setEditBlogId] = useState<number | null>(null)
    
    return (
    <EditPageContext.Provider value={{editBlogId,setEditBlogId}}>
        {children}
    </EditPageContext.Provider>
    )
}