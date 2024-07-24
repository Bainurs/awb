import React, { useState } from 'react';



const TabPanel = ({tabs}) => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    return (
        <>
            <div className="flex flex-wrap flex-row justify-between items-center bg-white fl-menu">
                <ul className="flex flex-row justify-between items-center bg-white nav-pills">
                    {
                        tabs.map(item => (
                                <li className="nav-item relative" key={item.id}>
                                    <a 
                                        href="#" 
                                        className={`nav-link ${activeTab === item.id ? 'active' : ''}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setActiveTab(item.id);
                                        }}
                                    >
                                        {item.link}
                                    </a>
                                </li>
                        ))
                    }
                </ul>
            </div>
            <div className="flex flex-wrap">
                <div className="tab-content">
                    {
                        tabs.map(item => 
                        item.id === activeTab ? (
                            <div className="tap-pane fade active" key={item.id}>
                                <div className="flex flex-row justify-start items-start fl-content">
                                    <div className="flex flex-col justify-center items-start fl-col first">
                                        <img src={item.img.src} alt="" className="fl-col-img flex" />
                                    </div>
                                    <div className="flex flex-col justify-center items-start fl-col">
                                        <div className="flex flex-col justify-center items-start fl-objects">
                                            <h4 className="fl-title">
                                                {item.title}
                                            </h4>
                                            <ul className="fl-list">
                                                {
                                                    item.list.map((elem, index) => (
                                                        <li className="relative fl-list-item" key={index}>
                                                            {elem}
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="tap-pane fade" key={item.id}>
                                <div className="flex flex-row justify-start items-start fl-content">
                                    <div className="flex flex-col justify-center items-start fl-col first">
                                        <img src={item.img.src} alt="" className="fl-col-img flex" />
                                    </div>
                                    <div className="flex flex-col justify-center items-start fl-col">
                                        <div className="flex flex-col justify-center items-start fl-objects">
                                            <h4 className="fl-title">
                                                {item.title}
                                            </h4>
                                            <ul className="fl-list">
                                                {
                                                    item.list.map((elem, index) => (
                                                        <li className="relative fl-list-item" key={index}>
                                                            {elem}
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default TabPanel;
