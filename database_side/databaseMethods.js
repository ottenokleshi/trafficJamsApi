/**
 * CRUD операции
 */
/* eslint-disable no-console */

/**
 * Функция Create
 * @param {Object} table - таблица из /models/
 * @param {Object} elements - добавляемые элементы
 * @return {Promise}
 */
const createDb = (table, elements) => {
    if (Array.isArray(elements)) {
        return table.bulkCreate(elements)
                    .catch(err => console.log(`Database error: ${err}`));
    }
    return table.create(elements)
                .catch(err => console.log(`Database error: ${err}`));
};

/**
 * Функций Read
 * @param {Object} table - таблица из /models/
 * @param {Object} parametrs - параметры
 * @return {Promise}
 */
const readDb = (table, parametrs) => table.findAll(parametrs)
         .catch(err => console.log(`Database error: ${err}`));

/**
 * Функция Update
 * @param {Object} table - таблица из /models/
 * @param {Object} element - обновляемые значения
 * @param {Object} parametrs - параметры
 * @return {Promise}
 */
const updateDb = (table, element, parametrs) => table.update(element, parametrs)
         .catch(err => console.log(`Database error: ${err}`));

/**
 * Функция Delete
 * @param {Object} table - таблица из /models/
 * @param {Object} parametrs - параметры
 * @return {Promise}
 */
const deleteDb = (table, parametrs) => table.destroy(parametrs)
         .catch(err => console.log(`Database error: ${err}`));


module.exports = {
    createDb: createDb,
    readDb: readDb,
    updateDb: updateDb,
    deleteDb: deleteDb
};
