import React, { useState } from 'react';



const TabPanel = ({tabs}) => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    return (
        <>
            <div class="flex flex-wrap flex-row justify-between items-center bg-white fl-menu">
                <ul class="flex flex-row justify-between items-center bg-white nav-pills">
                    {
                        tabs.map(item => (
                                <li class="nav-item relative" key={item.id}>
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
            <div class="flex flex-wrap">
                <div class="tab-content">
                    {
                        tabs.map(item => 
                        item.id === activeTab ? (
                            <div class="tap-pane fade active" key={item.id}>
                                <div class="flex flex-row justify-start items-start fl-content">
                                    <div class="flex flex-col justify-center items-start fl-col first">
                                        <img src={item.img.src} alt="" class="fl-col-img flex" />
                                    </div>
                                    <div class="flex flex-col justify-center items-start fl-col">
                                        <div class="flex flex-col justify-center items-start fl-objects">
                                            <h4 class="fl-title">
                                                {item.title}
                                            </h4>
                                            <ul class="fl-list">
                                                {
                                                    item.list.map(elem => (
                                                        <li class="relative fl-list-item">
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
                            <div class="tap-pane fade" key={item.id}>
                                <div class="flex flex-row justify-start items-start fl-content">
                                    <div class="flex flex-col justify-center items-start fl-col first">
                                        <img src={item.img.src} alt="" class="fl-col-img flex" />
                                    </div>
                                    <div class="flex flex-col justify-center items-start fl-col">
                                        <div class="flex flex-col justify-center items-start fl-objects">
                                            <h4 class="fl-title">
                                                {item.title}
                                            </h4>
                                            <ul class="fl-list">
                                                {
                                                    item.list.map((elem, index) => (
                                                        <li class="relative fl-list-item" key={index}>
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
