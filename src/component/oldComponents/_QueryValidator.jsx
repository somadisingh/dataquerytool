import SqlLint from 'sql-lint';

const validateSqlQuery = (sqlQuery) => {
  const linter = new SqlLint();
  const lintResult = linter.lint(sqlQuery);

  if (lintResult.error) {
    return { isValid: false, error: lintResult.error.message };
  } else {
    return { isValid: true };
  }
};

export default validateSqlQuery;
