import { Calendar, Col, Flex, Progress, Row, Tooltip } from "antd";
import styles from "./Main.module.scss";
import Banner from "./Banner/Banner";
import Cards from "./Cards/Cards";

export default function Main() {
  return (
    <main className={styles.mainContainer}>
      <Row> 
        <Col span={6} push={18} className={styles.rigthSide}>
          <Calendar fullscreen={false} className={styles.calendarSize} />
          <Flex gap="small" vertical>
            <Tooltip title="3 done / 3 in progress / 4 to do">
              <Progress percent={60} success={{ percent: 30 }} />
            </Tooltip>
            <Flex gap="small" wrap>
              <Tooltip title="3 done / 3 in progress / 4 to do">
                <Progress
                  percent={60}
                  success={{ percent: 30 }}
                  type="circle"
                />
              </Tooltip>
              <Tooltip title="3 done / 3 in progress / 4 to do">
                <Progress
                  percent={60}
                  success={{ percent: 30 }}
                  type="dashboard"
                />
              </Tooltip>
            </Flex>
          </Flex>
        </Col>
         
        <Col span={15} pull={6} className={styles.gapWrapper}>
            <Banner/>
            <Cards/>
        </Col>
      </Row>
    </main>
  );
}
