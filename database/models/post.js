module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    subjectId: DataTypes.INTEGER
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
    Post.hasMany(models.Comment, {
      foreignKey: 'postId',
      as: 'comments',
      onDelete: 'CASCADE',
    });

    Post.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'author',
      onDelete: 'CASCADE',
    })

    Post.belongsTo(models.Subject, {
      foreignKey: 'subjectId',
      as: 'subjects',
      onDelete: 'CASCADE',
    })

  };
  return Post;
};

// database/models/post.js