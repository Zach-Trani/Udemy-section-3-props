import React from 'react';

const ApprovalCard = (props) => {
    return (
        <div className="ui card">

            {/* Reference props.children to show children being passed from parent */}
            <div className="content">{props.children}</div> 
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Approve</div>
                    <div className="ui basic red button">Reject</div>
                </div>
            </div>
        </div>
    );
};

export default ApprovalCard;

// keeping the approval card as its own component allows it to be used on its own or with commentDetail