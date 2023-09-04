import React, {useState} from 'react';
import s from "./Admin.module.css"
import Link from "next/link";
import Global from "@/components/Admin/Sections/Global";
import Gifts from "@/components/Admin/Sections/Gifts";
import Users from "@/components/Admin/Sections/Users/Users";
import AddGift from "@/components/Admin/Sections/Add Gift/AddGift";
import Categories from "@/components/Admin/Sections/Categories/Categories";

function Index(props) {
    const [currentSection, setCurrentSection] = useState("global")
    const handleSectionChange = (section) => {
        setCurrentSection(section)
    }
    return (
        <>
            <div className={s.adminWrapper}>
                <div className={s.adminBlock}>
                    <div className={s.sidebar}>
                        <ul>
                            <li className={currentSection === "global" && s.activeSection} onClick={() => {handleSectionChange("global")}}>Global</li>
                            <li className={currentSection === "addGift" && s.activeSection} onClick={() => {handleSectionChange("addGift")}}>Add Gift</li>
                            <li className={currentSection === "gifts" && s.activeSection} onClick={() => {handleSectionChange("gifts")}}> Gifts</li>
                            <li className={currentSection === "users" && s.activeSection} onClick={() => {handleSectionChange("users")}}> Users</li>
                            <li className={currentSection === "categories" && s.activeSection} onClick={() => {handleSectionChange("categories")}}>Categories</li>
                            <li><Link href={'/'}>Test</Link></li>
                            <li><Link href={'/'}>Test</Link></li>
                            <li><Link href={'/'}>Test</Link></li>
                            <li><Link href={'/'}>Test</Link></li>
                            <li><Link href={'/'}>Test</Link></li>
                            <li><Link href={'/'}>Test</Link></li>
                        </ul>
                    </div>
                    <div className={s.adminContent}>
                        {currentSection === 'global' && <Global />}
                        {currentSection === 'addGift' && <AddGift />}
                        {currentSection === 'gifts' && <Gifts />}
                        {currentSection === 'users' && <Users />}
                        {currentSection === 'categories' && <Categories />}
                    </div>
                </div>

            </div>
        </>


    );
}

export default Index;