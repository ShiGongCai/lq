//获取所有学生信息

getAllStudents();
function getAllStudents(){
var jsonArray = [];
var stustatus=0
var maxSize=500
$.ajax({
    type: 'GET',
    url: 'https://dasai.lanqiao.cn/core/apply/contact/findStuList',
    data: {
        "matchId":21,
        "size": maxSize,
        "stustatus": stustatus,
        "current": 1
        },
    success: function (res) {
        if (res.code == 0) {
    
            for(var i=0;i<500;i++){
                var stu=new Object();
                 stu.educationNumber= res.data.records[i].educationNumber,
                 stu.personalApplyId= res.data.records[i].personalApplyId;
                 stu.identityRealname= res.data.records[i].identityRealname;
                 stu.contactId= res.data.records[i].contactId==undefined?"":res.data.records[i].contactId;
                 stu.contactName= res.data.records[i].contactName==undefined?"":res.data.records[i].contactName;
                 stu.educationCollege= res.data.records[i].educationCollege;
                 stu.identityMobile= res.data.records[i].identityMobile;
                 stu.itemGroup= res.data.records[i].itemGroup;
                 stu.itemName= res.data.records[i].itemName;
                 stu.matchId= res.data.records[i].matchId;
                 stu.operationStatus= res.data.records[i].operationStatus;
                 stu.orderStatus= res.data.records[i].orderStatus;
                 stu.orderStudentPay= res.data.records[i].orderStudentPay;
                 stu.orgHandleStatus= res.data.records[i].orgHandleStatus;
                 stu.paymentStatus= res.data.records[i].paymentStatus;
                 stu.personalConfirmId= res.data.records[i].personalConfirmId;
                 stu.statusName= res.data.records[i].statusName;
                 jsonArray.push(stu);
            }
          

            $.ajax({
                type: 'GET',
                url: 'https://dasai.lanqiao.cn/core/apply/contact/findStuList',
                data: {
                    "matchId":21,
                    "size": maxSize,
                    "stustatus": stustatus,
                    "current": 2
                    },
                success: function (res) {
                    if (res.code == 0) {
                            //console.log(res.data.records)

                            for(var i=0;i<res.data.total-maxSize;i++){
                                var stu=new Object();
                                 stu.educationNumber= res.data.records[i].educationNumber,
                                 stu.personalApplyId= res.data.records[i].personalApplyId;
                                 stu.identityRealname= res.data.records[i].identityRealname;
                                 stu.contactId= res.data.records[i].contactId==undefined?"":res.data.records[i].contactId;
                                 stu.contactName= res.data.records[i].contactName==undefined?"":res.data.records[i].contactName;
                                 stu.educationCollege= res.data.records[i].educationCollege;
                                 stu.identityMobile= res.data.records[i].identityMobile;
                                 stu.itemGroup= res.data.records[i].itemGroup;
                                 stu.itemName= res.data.records[i].itemName;
                                 stu.matchId= res.data.records[i].matchId;
                                 stu.operationStatus= res.data.records[i].operationStatus;
                                 stu.orderStatus= res.data.records[i].orderStatus;
                                 stu.orderStudentPay= res.data.records[i].orderStudentPay;
                                 stu.orgHandleStatus= res.data.records[i].orgHandleStatus;
                                 stu.paymentStatus= res.data.records[i].paymentStatus;
                                 stu.personalConfirmId= res.data.records[i].personalConfirmId;
                                 stu.statusName= res.data.records[i].statusName;
                                 jsonArray.push(stu);
                            }
                           
                            $.ajax({
                                type: 'GET',
                                url: 'https://dasai.lanqiao.cn/core/apply/contact/findStuList',
                                data: {
                                    "matchId":22,
                                    "size": 500,
                                    "stustatus":stustatus,
                                    "current": 1
                                    },
                                success: function (res) {
                                    if (res.code == 0) { 
                                        for(var i=0;i<res.data.records.length;i++){
                                            var stu=new Object();
                                             stu.educationNumber= res.data.records[i].educationNumber,
                                             stu.personalApplyId= res.data.records[i].personalApplyId;
                                             stu.identityRealname= res.data.records[i].identityRealname;
                                             stu.contactId= res.data.records[i].contactId==undefined?"":res.data.records[i].contactId;
                                             stu.contactName= res.data.records[i].contactName==undefined?"":res.data.records[i].contactName;
                                             stu.educationCollege= res.data.records[i].educationCollege;
                                             stu.identityMobile= res.data.records[i].identityMobile;
                                             stu.itemGroup= res.data.records[i].itemGroup;
                                             stu.itemName= res.data.records[i].itemName;
                                             stu.matchId= res.data.records[i].matchId;
                                             stu.operationStatus= res.data.records[i].operationStatus;
                                             stu.orderStatus= res.data.records[i].orderStatus;
                                             stu.orderStudentPay= res.data.records[i].orderStudentPay;
                                             stu.orgHandleStatus= res.data.records[i].orgHandleStatus;
                                             stu.paymentStatus= res.data.records[i].paymentStatus;
                                             stu.personalConfirmId= res.data.records[i].personalConfirmId;
                                             stu.statusName= res.data.records[i].statusName;
                                             jsonArray.push(stu);
                                            }
                                        
                                        //console.log(JSON.stringify(res.resultData))
                                      // jsonArray = jsonArray.concat(res.data.records);
                                       //console.log(res.data.records)
                                       console.log(jsonArray)
                                    } else {
                                        alert(res);
                                    }
                                }
                            });
                        
            
                    } else {
                        alert(res);
                    }
                }
            });
            
            

        } else {
            alert(res);
        }
    }
});
}
