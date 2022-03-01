
let tasks = [];

module.exports.home = function(req, res){
    return res.render("home",{
        task_list:tasks
    });
};


module.exports.addTask = function(req, res){

    tasks.push({
        user_description:req.query.user_description,
        choose_category:req.query.choose_category,
        due_date:req.query.user_date
    });

    return res.redirect('back');
};

module.exports.deleteTask = function(req, res){
    // do nothing
}