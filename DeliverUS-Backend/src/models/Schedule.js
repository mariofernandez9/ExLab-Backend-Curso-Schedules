import { Model } from 'sequelize'

const loadModel = (sequelize, DataTypes) => {
  class Schedule extends Model {
    static associate (models) {
      Schedule.belongsTo(models.Restaurant, { foreignKey: 'restaurantId', as: 'restaurant' })
      Schedule.hasMany(models.Products, { foreignKey: 'squeduleId', as: 'products' })
    }
  }

  Schedule.init({

      startTime: {
        allowNull: false,
        type: DataTypes.TIME
      },

      endTime: {
        allowNull: false,
        type: DataTypes.TIME
      },

      restaurantId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE', // Se borran las reseñas de los restaurantes eliminados
        references: {
          model: {
            tableName: 'Restaurants'
            },
          key: 'id'
        }
      }
  }, {
    sequelize,
    modelName: 'Schedule'
  })

  return Schedule
}

export default loadModel
