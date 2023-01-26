/**
 *
 * FILE :
 *
 * DESCRIPTION :
 *
 * AUTHOR :
 *
 * DATE :
 *
 * COMMENT : (hyeoz) 테이블이 어디서 사용될 지 모르기때문에 데이터 타입은 한정하지 않는 것이 좋을 것 같습니다~
 */
/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";
import { Table as AntTable } from "antd";
import { ColumnsType } from "antd/es/table";

interface DataType {
  key: string;
  name?: string;
  email?: string;
  phone?: string;
  thumbnail?: string;
  title?: string;
  click?: number;
  link?: string;
  time?: string;
  category?: string;
  session?: string;
  speaker?: string;
  qna?: string;
  download?: string;
  star?: string;
  personnel?: string;
}

export type TableType = {
  columns: ColumnsType<DataType>;
  data: DataType[];
  pagination?: any;
  onChange?: (value: any) => void;
} & { css?: SerializedStyles };

export default function Table({
  onChange,
  pagination,
  columns,
  data,
  ...props
}: TableType) {
  return (
    <AntTable
      {...props}
      columns={columns}
      dataSource={data}
      pagination={pagination}
      css={styles}
      onChange={(e) => {
        onChange && onChange(e);
      }}
      {...props}
    ></AntTable>
  );
}

const styles = css`
  th {
    background: #ffeee9 !important;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #ff9173 !important ;
  }

  .ant-table-row {
    :last-child {
      border-radius: 0px 0px 12px 12px !important;

      .ant-table-cell {
        :first-child {
          border-radius: 0px 0px 0px 12px !important;
        }
        :last-child {
          border-radius: 0px 0px 12px 0px !important;
        }
      }
    }
  }

  .ant-table {
    border-radius: 12px !important;
  }

  .ant-pagination-item-active {
    background-color: transparent;
    border: none;
  }

  .ant-pagination-item-active {
    a {
      color: #000000 !important;
    }
  }
  .ant-table-thead {
    .ant-table-cell {
      /* border: none !important; */
    }
  }
  .ant-table-tbody .ant-table-cell {
    border-right: 1px solid #eaeaea;
  }
`;
