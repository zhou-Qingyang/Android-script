var count = 0
while (true) {
    if (id("text_title").exists()) {
        count++
        var content = textStartsWith("(多选题)").findOne().text();
        var ob1 = id("tv_answer_option_info").find();
        var answer = id("tv_answer_correct").findOne().text();
        var analyze = id("tv_question_analyze").findOne().text().replace(/\n/g, "");
        if (!ob1.empty()) {
            log(content + "*", ob1[0].text() + "*", ob1[1].text() + "*", ob1[2].text() + "*", ob1[3].text() + "*", answer + "*", analyze)
        }
        sleep(random(300, 300))
        if (count == 6) {
            break;
        }
        id("view_pager").findOne().scrollForward();
    }
}