module.exports = function( sequelize, DataTypes){
    const Model = sequelize.define('Stats', {
        score: DataTypes.INTEGER,
        fairways: DataTypes.INTEGER,
        greens: DataTypes.INTEGER,
        up_and_downs: DataTypes.INTEGER,
        up_and_down_chances: DataTypes.INTEGER,
        putts: DataTypes.INTEGER,
        tournament_round: DataTypes.BOOLEAN
    });

    return Model;
}