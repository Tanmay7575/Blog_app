import Blog from "../models/Blog.js";



export const save_draft = async (req, res) => {
  try {
    const { id, title, content, tags } = req.body;

    if (id) {
      // Update existing draft
      const updatedBlog = await Blog.findByIdAndUpdate(
        id,
        {
          title,
          content,
          tags,
          status: 'draft',
          updated_at: Date.now()
        },
        { new: true } // Return the updated document
      );

      return res.json(updatedBlog);
    } else {
      // Create new draft
      const newBlog = new Blog({
        title,
        content,
        tags,
        status: 'draft',
        created_at: Date.now(),
        updated_at: Date.now()
      });

      await newBlog.save();
      return res.json(newBlog);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const publish=async(req,res)=>{
    try {
        const {id,title,content,tags}=req.body;
        if(id){
        const data={
            status:'published',
            updated_at:Date.now()
        }
        const blog=await Blog.findByIdAndUpdate(id,{$set:data});
        return res.status(200).json({message:"Blog published successfully"});
      }else{
         const blog=new Blog({
            title,
            content,
            tags,
            status:'published',
            updated_at:Date.now()
        });
          await blog.save();
        return res.status(200).json({message:"Blog published successfully"});
      }
        
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

export const allBlogs=async(req,res)=>{
    try{
        const blog=await Blog.find();
        if(!blog){
            return res.status(400).json({message:"blogs not available"});
        }
        
        return res.json(blog);
         
    }catch(error){
        return res.status(500).json({message:error.message});
    }
}

export const blog=async(req,res)=>{
    try {
          const {blog_id}=req.body;
          const blogs=await Blog.findOne({_id:blog_id});
          if(!blogs){
            return res.status(500).json({message:"blog not found"});
          }

          return res.json({blogs});
    } catch (error) {
         return res.status(500).json({message:error.message});
    }
}