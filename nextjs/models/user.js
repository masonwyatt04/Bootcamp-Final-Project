module.exports = function( sequelize, DataTypes){
    const Model = sequelize.define('User', {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        handicap: DataTypes.INTEGER
    });

    return Model;
}