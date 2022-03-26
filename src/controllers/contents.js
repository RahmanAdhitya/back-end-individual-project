const { nanoid } = require('nanoid');
const { postsDB } = require('../database');

const contentControllers = {
  getAllContent: (req, res) => {
    if (!postsDB.length) {
      res.status(404).json({
        message: 'No posts found',
      });
      return;
    }

    res.status(200).json({
      message: 'Get posts succsessful',
      result: postsDB,
    });
  },
  getContentById: (req, res) => {
    const contenId = req.params.id;

    const findIndex = postsDB.findIndex((val) => {
      console.log(val.id);
      return val.id == contenId;
    });

    if (findIndex == -1) {
      res.status(404).json({
        message: 'post not found',
      });
      return;
    }

    const foundPost = postsDB[findIndex];

    res.status(200).json({
      message: 'Post found',
      return: foundPost,
    });
  },
  createNewContent: (req, res) => {
    const newContent = req.body;

    if (!newContent) {
      res.status(400).json({
        message: 'Content data is required',
      });
      return;
    }

    if (!newContent.image) {
      res.status(400).json({
        message: 'image is required',
      });
      return;
    }

    if (!newContent.location) {
      res.status(400).json({
        message: 'location is required',
      });
      return;
    }

    if (!newContent.caption) {
      res.status(400).json({
        message: 'caption is required',
      });
      return;
    }

    if (!newContent.userId) {
      res.status(400).json({
        message: 'userId is required',
      });
      return;
    }

    newContent.id = nanoid();
    postsDB.push(newContent);

    res.status(200).json({
      message: 'New Content created',
      result: newContent,
    });
  },
  deleteContentById: (req, res) => {
    const contentId = req.params.id;

    const findIndex = postsDB.findIndex((val) => {
      return val.id == contentId;
    });

    if (!findIndex === -1) {
      res.status(404).json({
        message: 'Post Not Found',
      });
      return;
    }

    postsDB.splice(findIndex, 1);

    res.status(200).json({
      message: 'Post has been deleted',
    });
  },
  editContentById: (req, res) => {
    const contenId = req.params.id;
    const editContentData = req.body;

    const findIndex = postsDB.findIndex((val) => {
      console.log(val.id);
      return val.id == contenId;
    });

    if (findIndex == -1) {
      res.status(404).json({
        message: 'content not found',
      });
      return;
    }

    postsDB[findIndex] = {
      ...postsDB[findIndex],
      ...editContentData,
    };

    res.status(200).json({
      message: 'content edited',
      result: postsDB[findIndex],
    });
  },
};

module.exports = { contentControllers };
