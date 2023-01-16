'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('post_images', {
      post_image_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      post_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'posts',
          key: 'post_id',
        },
        onDelete: 'cascade',
      },
      post_image_origin_name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      post_image_new_name:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      post_image_type:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      post_image_size:{
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.DataTypes.NOW,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('post_images');
  },
};
