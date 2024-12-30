import "./List.css";
import { useTranslation } from "react-i18next";

function List() {
  const { t } = useTranslation();
  const data = [
    {
      sNo: t("Volunteer.List.TableDetails.row1.col1"),
      name: t("Volunteer.List.TableDetails.row1.col2"),
      mobileNo: t("Volunteer.List.TableDetails.row1.col3"),
    },
    {
      sNo: t("Volunteer.List.TableDetails.row2.col1"),
      name: t("Volunteer.List.TableDetails.row2.col2"),
      mobileNo: t("Volunteer.List.TableDetails.row2.col3"),
    },
  ];

  return (
    <div className="List">
      <table>
        <thead>
          <tr>
            <th>{t("Volunteer.List.TableHead.col1")}</th>
            <th>{t("Volunteer.List.TableHead.col2")}</th>
            <th>{t("Volunteer.List.TableHead.col3")}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.sNo}</td>
                <td>{val.name}</td>
                <td>{val.mobileNo}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default List;
