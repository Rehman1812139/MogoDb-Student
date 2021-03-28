const Student= require('../model/student.model')
exports.test=(req,res)=>{
    res.send('Testing Controller')
}

exports.student_create=(req,res)=>{
let student=new Student({
    Name:req.body.Name,
    Gender:req.body.Gender,
    City:req.body.City
})
student.save((err)=>{
if(err){
    return next (err)
}
res.send('Student has been added')
})
}

exports.student_details=(req,res)=>{
    Student.findById(req.params.id,(err,student)=>{
        res.send(student)
    })
}

exports.student_update=(req,res)=>{
    Student.findByIdAndUpdate(req.params.id, {$set: req.body}, (err,student)=>{
        if(err) return next(err)
        res.send('Students list has been updated')
    })

}

exports.student_delete=(req,res)=>{
Student.findByIdAndRemove(req.params.id, (err)=>{
      if (err) return next(err)
      res.send('Deleted Successfully.')

})

}