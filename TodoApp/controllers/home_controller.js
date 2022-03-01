
let tasks = [
    "why not add a task?",
    "Let's make a todoApp",
    "Annual report submission deadline"
];

module.exports.home = function(req, res){
    return res.render("home",{
        task_list:tasks
    });
};


module.exports.addTask = function(req, res){
    tasks.push(req.query.user_description);
    let chooseCat = req.query.choose_category;
    let dueDate = req.query.user_date;

    return res.redirect('back');
};

module.exports.deleteTask = function(req, res){
    // do nothing
}