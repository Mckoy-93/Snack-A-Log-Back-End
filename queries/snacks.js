const db = require('../db/dbConfig.js');

const getAllSnacks = async () => {
    try {
        const result = await db.any("SELECT * FROM snacks");
        return { result };
      } catch (error) {
        return { error };
      }
}


const getSnack = async (id) => {
    try {
      const result = await db.any(`SELECT * FROM snacks WHERE id=${id}`);
      return { result };
    } catch (error) {
      return { error };
    }
  };

  const createSnack = async (snack) => {
    try {
      const result = await db.one(
        `INSERT INTO
          snacks(name,  calories, fat, sodium, carbs, added_sugars)
         VALUES
          ($1, $2, $3, $4, $5, $6)
         RETURNING *;`,
        [snack.name, snack.calories, snack.fat, snack.sodium, snack.carbs, snack.added_sugars]
      );
      return { result };
    } catch (error) {
      return { error };
    }
  };

  const deleteSnack = async (id) => {
    try {
      const result = await db.one(
        "DELETE FROM snacks WHERE id=$1 RETURNING *",
        id
      );
      return { result };
    } catch (error) {
      return { error };
    }
  };

  const updateSnack = async (id, snack) => {
    try {
      const result = await db.one(
        `UPDATE snacks SET name=$1, calories=$2, fat=$3, sodium=$4, carbs=$5, added_sugars=$6  WHERE id=$7 RETURNING *`,
        [snack.name, snack.calories, snack.fat, snack.sodium, snack.carbs, snack.added_sugars, id]
      );
      return { result };
    } catch (error) {
      return { error };
    }
  };

module.exports = {
    getAllSnacks,
    getSnack,
    createSnack,
    deleteSnack,
    updateSnack
}