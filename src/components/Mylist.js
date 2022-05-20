import React from "react";
import { useNavigate } from "react-router-dom";

const Mylist = ({ listObj, isOwner }) => {
    const navigation = useNavigate();
    const onShowlist = () => {
        navigation("/itemlist", { replace: false, state: { buyerindex : listObj.randomidx , filename : listObj.itemname} });
    }

    const onShowdetailClick = () => {
        navigate("/selling/detail", { replace: false, state: { detailObj: listObj } });
    }

    return (
        <>
            <div className="Itemclass">
                {isOwner ? (
                    <>  
                        <div>
                            <h4>품목 이름: {`${listObj.itemname}`}</h4>
                        </div>
                        <div>
                        <button className="detaillist show Btn" onClick={onShowdetailClick}>
                                해당 공구 자세히보기
                            </button>
                        </div>
                        <div>
                            <button className="detaillist show Btn" onClick={onShowlistClick}>
                                공구 참여자 목록 보기
                            </button>
                        </div>

                    </>
                ) : (<></>)}
            </div>
        </>
    );
};
export default Mylist;