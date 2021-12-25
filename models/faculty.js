module.exports = (sequelize, DataTypes) => {
    return sequelize.define('faculty', {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey:true,
            allowNull: false
          },
          name: {
            type: DataTypes.STRING,
            allowNull: false
          },
          createdAt: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false,
          },
          updatedAt: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false,
          }
    })
}