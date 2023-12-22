const Home=(req,res)=>{
    res.send('<h1>Hello World</h1>')
}


const About=(req,res)=>{
    res.send('<h1>Hello World About Page</h1>')
}


module.exports={
    Home, About
}